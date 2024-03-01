const ejs = require('ejs')
const express = require('express')
const http = require('http');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan')
const mongoose = require('mongoose')
const Quiz = require('./models/quiz.js')

const app = express();


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


const PORT = 3003;

const DB = 'mongodb+srv://admin:sasa2004@cluster1.kamwq9w.mongodb.net/?retryWrites=true&w=majority'

mongoose
 .connect(DB, {useNewUrlParser: true, useUnifiedTopology: true})
 .then((res) => console.log('Connected to DB'))
 .catch((error) => console.log(error))

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.ejs`)

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`);
});

app.use(morgan(':method :url :status :res[content-lenght] - :response-time ms'))

app.use(express.static( 'public'))

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render(createPath('index'))
})



// app.get('/quizes/:id', (req, res) => {
//     const quizId = req.params.id;
//     Quiz.findById(quizId)
//         .then((quiz) => {
//             if (!quiz) {
//                 return res.status(404).json({ error: 'Quiz not found' });
//             }
//             res.json(quiz); // Повертаємо тест у форматі JSON
//         })
//         .catch((error) => {
//             console.error(error);
//             res.status(500).json({ error: 'Internal server error' }); // Повертаємо помилку у форматі JSON
//         });
// });

// app.get('/quizes/:id', (req, res) => {
//     Quiz
//     .findById(req.params.id)
//     .then((quiz) => res.render(createPath('quiz'), {quiz}))

//     .catch((error) => {
//         console.log(error)
//         res.status(500).json({ error: 'Internal server error' });
//     })
// })

app.get('/quizes/:id', (req, res) => {
   
 
   
    
    Quiz.findById(req.params.id)
   
        .then((quiz) => {
          
            if (!quiz) {
                return res.status(404).render(createPath('error'));
            }
            res.render(createPath('quiz'), {quiz});
        })
        .catch((error) => {
            console.log(error)
            res.status(500).render(createPath('error'));
        });
});

app.delete('/quizes/:id', (req, res) => {
   
    Quiz
    .findByIdAndDelete(req.params.id)
    .then(result => {
        res.sendStatus(200)
    })
    .catch((error) => {
        console.log(error)
        res.render(createPath('error'))
    })
})



app.get('/edit/:id', (req, res) => {
    Quiz
    .findById(req.params.id)
    .then((quiz) => res.render(createPath('edit-quiz'), {quiz}))
    .catch((error) => {
        console.log(error)
        res.render(createPath('error'), {title: 'Error'})
    })
})

app.put('/edit/:id', (req, res) => {
    const {name, questions} = req.body
    const {id} = req.params
    Quiz
    .findByIdAndUpdate(id, {name, questions})
    .then(result => res.redirect(`/quizes/${id}`))
    .catch((error) => {
        console.log(error)
        res.render(createPath('error'), {title: 'Error'})
    })
})

app.get('/quizes', (req, res) => {
    Quiz
    .find()
    // .sort({ createdAt: -1})
    .then((quizes) => res.render(createPath('quizes'), {quizes})) // Повертаємо список тестів у форматі JSON
    .catch((error) => {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' }); // Повертаємо помилку у форматі JSON
    })
})

// app.post('/add-quiz', (req, res) => {
//     const {name, questions} = req.body
 
//     const quiz = new Quiz({name, questions});
//     quiz
//     .save()
//     // .then((result) => res.send(result))
   
   
//     .then((result) => res.redirect('/quizes'))
//     .then((result) => res.render(createPath('quiz'), {result}))
//     .catch((error) => {
//         console.log(error);
//         res.render(createPath('error'));
//     });
//  });

app.post('/add-quiz', (req, res) => {
    const { name, questions } = req.body;
 
    const quiz = new Quiz({ name, questions });
    quiz.save()
        .then(() => {
            res.redirect('/quizes');
        })
        .catch((error) => {
            console.log(error);
            res.render(createPath('error'));
        });
});

// app.get('/quizes/:id', (req, res) => {
//     const quizId = req.params.id;

//     Quiz.findById(quizId)
//         .then((quiz) => {
//             if (!quiz) {
//                 return res.status(404).render(createPath('error'));
//             }
//             res.render(createPath('quiz'), { quiz });
//         })
//         .catch((error) => {
//             console.log(error)
//             res.status(500).render(createPath('error'));
//         });
// });


app.get('/quizes/:id', (req, res) => {
    const quizId = req.params.id;

    Quiz.findById(quizId)
        .then((quiz) => {
            if (!quiz) {
                return res.status(404).render(createPath('error'));
            }
            res.render(createPath('quiz'), { quizData: quiz }); // Передача об'єкту quiz під іменем quizData
        })
        .catch((error) => {
            console.log(error);
            res.status(500).render(createPath('error'));
        });
});


 app.get('/add-quiz', (req, res) => {
    // Отримання даних для відображення форми створення тесту з бази даних чи іншого джерела
   
    res.render(createPath('add-quiz')); // Передача змінної quiz у контексті
});


app.use((req, res) => {
    res.render(createPath('error'))
})

