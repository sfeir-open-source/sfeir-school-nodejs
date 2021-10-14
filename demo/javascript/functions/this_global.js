function fn() {
    console.log(this === global)
}
fn()

function fnStrict() {
    'use strict'
    console.log(this === global)
    console.log(this)
}
fnStrict()