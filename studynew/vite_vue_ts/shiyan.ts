interface Iuser {
  bname: string;
}

function da(person: Iuser): string {
  return person.bname + '';
}
console.log(da({ bname: 'zang' }));
