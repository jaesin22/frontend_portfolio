function Hello({ name, big }: never) {
  if (big) {
    return <h1>ㅎㅇㅎㅇ, {name}</h1>;
  }
  return <p>ㅎㅇㅎㅇ여, {name}</p>;
}

export default Hello;
