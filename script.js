var weekday = new Date().toLocaleString("en-US", { weekday: "long" });
// console.log(weekday);

if (weekday === "Monday") {
  console.log("Let's get this week started!");
} else if (weekday === "Tuesday") {
  console.log("Worky work!");
} else if (weekday === "Wednesday") {
  console.log("Happy Hump Day!");
} else if (weekday === "Thursday") {
  console.log("One more day until the weekend!");
} else if (weekday === "Friday") {
  console.log("Happy weekend!");
} else {
  console.log("Yay! Have a great weekend!");
}
