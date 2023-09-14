
import { Component, Suspense, createEffect, createResource, createSignal } from 'solid-js'


const nuevo: any = document.createElement("input");

export const InternationalPhoneImplementation = () => {

    const inputElement = document.querySelector("#phone2") as HTMLInputElement;


    window.intlTelInput(inputElement, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
      });
return(

    <div>
    <h4>International Phone Test</h4>
    <input id='phone2' type="text" src="path/to/intlTelInput.js" > </input>
</div>
)
}