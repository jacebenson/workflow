# Workflow

> Workflow Diagrammer

## Installing / Getting started

This project doesn't need to be installed to try it out.  Just go to https://workflow.jace.pro and try.

It follows the MermaidJS syntax.

### Syntax for Flows

For more extensive documentation see [mermaidjs docs](https://mermaidjs.github.io/#/flowchart).

#### Graph orientation

 - `graph TD` top to bottom
 - `graph TB` top to bottom (same as TD)
 - `graph TD` right to left
 - `graph TD` left to right
 - `graph TD` bottom to top

#### Nodes

Nodes can be identified or not.  To have unidentified nodes, just add a new line with it's name.  You cannot do names with special characters or spaces in them.

```
graph TD
  id
```

If you want to identify them, you have a lot more control.

```
graph TD
  id1(Box with rounded edges)
  id2((Circle))
  id3>Asymetric shape]
  id4{Rhombus}
  id5["Box with () special charactesr"]
```

#### Lines

```
graph TD
  id01 --> id02 
  id03 --- id04
  id05 -->|Text on the line ---id06
  id07 --Test on the line --> id08
  id10 -.-> id11
  id12 -. text .-> id13
  id14 ==> id14
```
This is a progressive web app, you can install it locally with chrome with the (+) in the address bar.

If you just want to try it out, follow these steps;

1. Download the XML from the `/dist/` folder
2. Install the update set
   ** THIS ONLY adds the UI MACRO, it does not change your forms **



## Contributing

Pull requests are welcome. For major changes, please open an issue first to 
discuss what you would like to change.

However there are a lot of issues for everything I could find in servicenow.
If you know that application feel free to fill out the issue and comment on it.

### Setting up the repo

1.  [Fork this project](https://github.com/jacebenson/workflow/fork)
2.  Clone it down to your machine and in it's directory run;
    ```sh
    yarn start
    ```
3.  You should have it up and running.

### Actually Contributing

1.  [Fork it](https://github.com/jacebenson/osaf/fork)
1.  Make your changes to the files in `/public`
1.  Create a new Pull Request

## Licensing

"The code in this project is licensed under MIT license."
