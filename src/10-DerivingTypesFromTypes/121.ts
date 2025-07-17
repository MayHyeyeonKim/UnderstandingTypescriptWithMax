// 121. Another Great Use-case for "typeof"
function sum121(a: number, b: number) {
    return a + b;
}

function subtract121(a: number, b: number) {
    return a - b;
}

type SumFn = typeof sum121;
type SubtractFn = typeof subtract121;

// type SumFn = (a: number, b: number) => number;
// type SubtractFn = (a: number, b: number) => number

function performMathAction(cb: SumFn | SubtractFn) {
    // some code...
}