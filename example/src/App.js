import React, { Component } from "react"
import ShortStory from "short-story"

import SimpleButton from "./SimpleButton"

class App extends Component {
  render() {
    return (
      <div className="App stsy">
        <ShortStory
          name="Boolean"
          knobs={{
            text: { type: "text", default: "Click here!" },
            secondary: { type: "boolean", label: "Secondary", default: false },
          }}
        >
          {props => {
            return <SimpleButton {...props} />
          }}
        </ShortStory>
        <ShortStory
          name="Text"
          knobs={{
            name: { label: "Name", type: "text", default: "ShortStory" },
            years: {
              type: "number",
              min: 0,
              max: 132,
              step: 0.25,
              default: 0.5,
            },
          }}
        >
          {({ name, years }) => (
            <p>
              Hello world, my name is {name}! I'm{" "}
              {parseFloat(years, 10).toFixed(2)} years old.
            </p>
          )}
        </ShortStory>
        <ShortStory
          name="Textarea"
          knobs={{
            message: {
              name: "myTextarea",
              type: "textarea",
              label: "Diary Entry",
              default: "Dear diary...",
            },
          }}
        >
          {state => {
            return (
              <p
                style={{
                  width: "200px",
                  padding: "16px 32px",
                }}
              >
                {state.message}
              </p>
            )
          }}
        </ShortStory>
        <ShortStory
          name="Number"
          knobs={{
            stars: {
              label: "Stars",
              type: "number",
              min: 0,
              max: 5,
              default: 4,
            },
          }}
        >
          {state => {
            let stars = ["◽️️️", "◽️️️", "◽️️️", "◽️️️", "◽️️️"]

            for (let i = 0; i < state.stars; i++) {
              stars[i] = "⭐️"
            }

            return <div>Rating: {stars.join("")}</div>
          }}
        </ShortStory>
        <ShortStory
          name="Enum"
          knobs={{
            animal: {
              label: "Animal",
              type: "enum",
              options: ["dog", "cat", "rabbit"],
              labels: ["Dog", "Cat", "Rabbit"],
              default: "dog",
            },
          }}
        >
          {state => {
            return (
              <img
                style={{
                  width: "400px",
                  height: "300px",
                  backgroundColor: "#ccc",
                }}
                alt={`A ${state.animal}.`}
                src={`https://source.unsplash.com/800x600/?${state.animal}`}
              />
            )
          }}
        </ShortStory>
        <ShortStory
          name="Segment"
          knobs={{
            alignment: {
              type: "segment",
              label: "Alignment",
              options: ["left", "center", "right"],
              labels: ["Left", "Center", "Right"],
              default: "left",
            },
          }}
        >
          {state => {
            return (
              <p
                style={{
                  width: "400px",
                  textAlign: state.alignment,
                }}
              >
                Hello world!
              </p>
            )
          }}
        </ShortStory>
        <ShortStory
          name="Color"
          knobs={{
            color: {
              type: "color",
              label: "Color",
              default: "#e0a681",
            },
          }}
        >
          {state => {
            return (
              <h4
                style={{
                  color: state.color,
                }}
              >
                Hello world!
              </h4>
            )
          }}
        </ShortStory>
        <ShortStory
          name="Hidden / Revealed"
          knobs={{
            darkMode: {
              type: "boolean",
              label: "Dark Mode",
              default: false,
            },
            lightModeText: {
              type: "text",
              label: "Light mode text",
              default: "It's bright in here!",
              hidden: s => s.darkMode,
            },
            darkModeText: {
              type: "text",
              label: "Dark mode text",
              default: "It's dark in here!",
              hidden: s => !s.darkMode,
            },
          }}
        >
          {state => {
            return (
              <h4
                style={{
                  padding: "16px 32px",
                  color: state.darkMode ? "#FFF" : "#333",
                  backgroundColor: state.darkMode ? "#333" : "#FFF",
                }}
              >
                {state.darkMode ? state.darkModeText : state.lightModeText}
              </h4>
            )
          }}
        </ShortStory>
        <ShortStory
          name="Date"
          knobs={{
            date: {
              type: "date",
              label: "Date",
              min: "2018-01-01",
              max: "2018-12-31",
              default: "2018-01-09",
            },
          }}
        >
          {state => {
            return (
              <p>
                {new Date(state.date).toLocaleDateString("en-gb", {
                  month: "long",
                  weekday: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            )
          }}
        </ShortStory>
        <ShortStory
          name="Time"
          knobs={{
            time: {
              type: "time",
              label: "Time",
              min: "09:00",
              max: "17:00",
              default: "04:20",
            },
          }}
        >
          {state => {
            return <p>What time is it? Oh, it's {state.time}.</p>
          }}
        </ShortStory>
      </div>
    )
  }
}

export default App
