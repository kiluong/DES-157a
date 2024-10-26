function generateMadLib() {
    // Collect input fields
    const inputs = {
        place: document.getElementById("place"),
        verb1: document.getElementById("verb1"),
        adjective: document.getElementById("adjective"),
        verb2: document.getElementById("verb2"),
        verb3: document.getElementById("verb3"),
        verb4: document.getElementById("verb4"),
        noun1: document.getElementById("noun1"),
        verb5: document.getElementById("verb5"),
        adverb1: document.getElementById("adverb1"),
        verb6: document.getElementById("verb6"),
        noun2: document.getElementById("noun2"),
        noun3: document.getElementById("noun3"),
        adverb2: document.getElementById("adverb2"),
        verb7: document.getElementById("verb7"),
    };

    // Check for empty inputs
    for (const [key, input] of Object.entries(inputs)) {
        if (!input.value) {
            alert(`Please fill in the blank for "${input.placeholder}".`);
            input.focus();  
            return;  
        }
    }

    // Apply color formatting to each input's value
    const formattedInputs = Object.fromEntries(
        Object.entries(inputs).map(([key, input]) => [
            key, `<span style="color: #ffe25e">${input.value}</span>`
        ])
    );

    // Construct the mad lib using formatted values
    const madLib = `I missed your 21st birthday, I’ve been up at ${formattedInputs.place}. Almost tried to ${formattedInputs.verb1} you, don’t know if I should. Hate to see you half-${formattedInputs.adjective}, ${formattedInputs.verb2}. Hate to think you ${formattedInputs.verb3} without me. I’m sorry if you ${formattedInputs.verb4} me, if I were ${formattedInputs.noun1}, I would. Thought you’d see it ${formattedInputs.verb5}, but you ${formattedInputs.adverb1} could. I still haven’t ${formattedInputs.verb6} from your ${formattedInputs.noun2}. But you said your ${formattedInputs.noun3} will ${formattedInputs.adverb2} ${formattedInputs.verb7} me.`;

    // Display the completed mad lib
    document.getElementById("madLibResult").innerHTML = madLib;
}
