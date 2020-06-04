## The Project

React is the main tool in this project. My main goal in this individual project was to create a countdown component where I define a default time to start counting down from and once the time is over display another component do show the message. 

To create `countdown` component I've used vanilla javascript features where I get the initial date along with the current time and then do the calculation to see how much time left. Once that time hits 0 then I display the `reveal` component. 

Later on I've decided to implement my function to be more dynamic so that when I introduce input field where user can type in specific date the countdown will still be valid and would be able to run without problem. 

## Challenges

First challenge I've faced was to pass the data from child to parent component. To pass it other way around I could simply pass the props down the tree, but vice versa was a bit tricky. Then I've created a function in parent component to call it when the condition that I've declared changes in child component. This way of implementation helped me quite a lot to learn how to pass data through the react component tree.

Live version is here : https://countdown-react.netlify.app/
