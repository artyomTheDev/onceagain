function wrap(fn: any) {
  return function (x: number) {
    console.log('x =', x);
    return fn(x);
  }
}
