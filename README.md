# Chad.JS

Chad.js is a no-frils component library that leaves solving the hard problems to you. It is architected in a way that allows you navigate the waters of cofiguration hell and intregate in any web framework stacks.

# Performance

Chad.js is the fastest rendering engine out there, with a file size of less that 200 bytes and "Hello World" app that comes in at 300B with an initial render time of 700 microseconds! Here is how this stacks up.

![](http://i.imgur.com/pbzJyXG.png)

![](http://i.imgur.com/HaKEl0p.png)

# Getting Started

Chad.js is very stripped down component library and because of that it only knows how to create elements and text nodes. If you want a different DOM abstraction you're on the hook to add them by modifying the prototype of the `Component` base class before you mount your app. You probably don't care about that because you're considering my micro-library so you must be a masochist or one of those folks that want to build modern javascript applications but have a death grip on "no build tools" and "JavaScript should always be the wild west". Anyways the simplest application looks like the following.

```
class App extends Component {
  render() {
    return this.h.createElement('h1', () => (
      this.t('Hello World')
    ));
  }
}

mount(App, document.body);
```

However, if the `Component` abstraction is too magical for you, you can simply just drop down one level by using the maximumly flexible primatives:

```
let h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('Hello World'));
document.body.appendChild(h1);
```

Actually, why the hell would you ever use an abstraction like mien, clearly using these fine APIs that browser vendors have blessed us with is enough to build any application. Now that I think about it, you should probably check out this amazing library called [Vanilla JS](http://vanilla-js.com/).

# Integrates With

- Webpack
- React Native
- Ruby on Rails
- React VR
- 430 react boilerplates
- Angular 4 (Probably Angular 5 and 6... but this is MIT so no gurantees)
- SSR
- PHP
- Java
- OCaml
- ADA
- Ember.JS
- Vue.JS
- Glimmer.js
- Redux
- Immutable.JS
- Flow.JS
- TypeScript
- Literally thoughsands of more choices.


# What's Next

Nothing it has been poured in concrete never to be iterared on again.