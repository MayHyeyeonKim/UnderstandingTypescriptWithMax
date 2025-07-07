// 78. Making Sense Of Abstract Classes

// The `abstract` keyword defines a class that cannot be instantiated directly and serves as a blueprint, 
// enforcing structure and requiring subclasses to implement any abstract methods while allowing shared functionality.


abstract class UIElement {
    constructor(public identifier: string) {
    }
    clone(targetLocation: string) {
        //logic to duplicate the UI element
    }
}

// const uiEle = new UIElement("myElement"); // ❌ Error: Cannot create an instance of an abstract class

class SideDrawerElement extends UIElement {
    constructor(identifier: string, public width: number, public height: number) {
        super(identifier);
    }
    // ... other methods specific to SideDrawerElement
}

