# UseEffect hook

Practicing a few ways of using the useEffect hook. Here's a short description of each.

Also set up the useState hook to be able to track and make changes to state variables "jokes" and "update" for later usage.

First example is a pretty simple one, where I'm using the hook
to change the document title.

Second example is a simple useEffect that only console logs "I re-rendered!". With the state variable "update" it'll console log everytime changes are made to the state.

Third example is using the useEffect for fetching an Api that generates random Chuck Norris jokes. I use the async function with the await expression to grab the data, with the same state variable as the Second example with the dependency array. Any change made to state, it'll re-render with a new joke each time.
