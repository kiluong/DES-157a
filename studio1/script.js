function generateMadLib() {
    const place = `<span style="color: #ffe25e">${document.getElementById("place").value}</span>`;
    const verb1 = `<span style="color: #ffe25e">${document.getElementById("verb1").value}</span>`;
    const verb2 = `<span style="color: #ffe25e">${document.getElementById("verb2").value}</span>`;
    const adjective = `<span style="color: #ffe25e">${document.getElementById("adjective").value}</span>`;
    const verb3 = `<span style="color: #ffe25e">${document.getElementById("verb3").value}</span>`;
    const verb4 = `<span style="color: #ffe25e">${document.getElementById("verb4").value}</span>`;
    const noun1 = `<span style="color: #ffe25e">${document.getElementById("noun1").value}</span>`;
    const verb5 = `<span style="color: #ffe25e">${document.getElementById("verb5").value}</span>`;
    const adverb1 = `<span style="color: #ffe25e">${document.getElementById("adverb1").value}</span>`;
    const verb6 = `<span style="color: #ffe25e">${document.getElementById("verb6").value}</span>`;
    const noun2 = `<span style="color: #ffe25e">${document.getElementById("noun2").value}</span>`;
    const noun3 = `<span style="color: #ffe25e">${document.getElementById("noun3").value}</span>`;
    const adverb2 = `<span style="color: #ffe25e">${document.getElementById("adverb2").value}</span>`;
    const verb7 = `<span style="color: #ffe25e">${document.getElementById("verb7").value}</span>`;

    const madLib = `I missed your 21st birthday, I’ve been up at ${place}. Almost tried to ${verb1} you, don’t know if I should. Hate to see you half-${adjective}, ${verb2}. Hate to think you ${verb3} without me. I’m sorry if you ${verb4} me, if I were ${noun1}, I would. Thought you’d see it ${verb5}, but you ${adverb1} could. I still haven’t ${verb6} from your ${noun2}. But you said your ${noun3} will ${adverb2} ${verb7} me.`;

    document.getElementById("madLibResult").innerHTML = madLib;
}
