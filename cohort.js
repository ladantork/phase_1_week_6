const cohort = {

    name : 'May2022',
    id: 1234 ,
    student_names: ['sara', 'amir', 'nelma', 'eloies'] 
    };

   function print(){

    console.log(this.id , " ", this.name, " " , this.student_names.length , " " , 'students in this cohort');


};
cohort.print = print;

cohort.print();
