# UseEffect hook

Practicing a few ways of using the useEffect hook. Here's a short description of each.

Also set up the useState hook to be able to track and make changes to state variables "jokes" and "update" for later usage.

First example the is a pretty simple one, where I'm using the hook
to change the document title. With no dependency array it'll be called every render.

Second example is a another simple useEffect that only console logs "I re-rendered!". With an empty dependency array, it'll render only once in the beginning and never again.

Third example is using the useEffect for fetching an Api that generates random Chuck Norris jokes. I use the async function with the await expression to grab the data. With the state variable "update" in the dependency array, Any change made to the state variable will show a new joke each render.
