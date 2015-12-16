var OrderPeople = function(people){
  return people.sort( (a,b) => a.age - b.age );
}