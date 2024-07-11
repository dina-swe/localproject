 const persons = [


    {
        id:1,
        name:'john',
        email:'jh@gmail.com'
    },  {
        id:2,
        name:'johnson',
        email:'jhs@gmail.com'
    },  {
        id:3,
        name:'David',
        email:'Dd@gmail.com'
    },  {
        id:4,
        name:'Mark',
        email:'jmk@gmail.com'
    },  {
        id:5,
        name:'Yenny',
        email:'yny@gmail.com'
    },  {
        id:6,
        name:'Mony',
        email:'my@gmail.com'
    },  {
        id:7,
        name:'danny',
        email:'dy@gmail.com'
    }, {
        id:8,
        name:'Anderson',
        email:'ad@gmail.com'
    }, {
        id:9,
        name:'Dalya',
        email:'dy@gmail.com'
    }, {
        id:10,
        name:'Deepak',
        email:'dpk@gmail.com'
    }
]


const dataHandler =(persons)=>{


    const sortedData = persons.sort((a,b)=>{
        if(a.name>b.name){
            return 1
        }else{
            return -1
        }
    })

    return sortedData

}


module.exports = {persons,dataHandler}