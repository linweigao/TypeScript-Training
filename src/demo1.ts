// The demo is to demonstrate how to provide type definition and how the type defintion will help in coding.
// https://davidwalsh.name/typescript

function myGreatApi(options) {
    /* Hopefully no one needs to read this */
}

// JSDoc

/**
 * My Great API does something great, just use it
 * @param   {Object} options Some options I need...
 * @returns {Object}         The results of my great API
 */
function myGreatApi2(options) {
    /* Hopefully no one needs to read this */
}

// TypeScript

interface MyGreatApiOptions {
    /**
     * The URL target for my API
     */
    target: string;

    /**
     * Translate from one language to another
     */
    translate?: boolean;
}

interface MyGreatApiResult {
    /**
     * The headers returned from the request
     */
    headers: { [header: string]: string };

    /**
     * The response
     */
    response: string;
}

/**
 * My Great API does something great, just use it
 * @param options Some options I need, maybe, if you want
 */
function myGreatApi3(options?: MyGreatApiOptions): MyGreatApiResult {
    /* now, no one has to read this */
}

function foo() {
    myGreatApi(1)
    var retVal = myGreatApi2(2)
    let retVal3 = myGreatApi3();
    retVal3 = myGreatApi3({target: "greateTarget", translate: false})
}