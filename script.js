console.log("connected");

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



$(document).ready(function () {
    //  Check to make sure bathrooms aren't doubled before I send screenshots.
    var bathroom1 = ["Bryan Sanchez", "Robert Centeno"];
    var bathroom2 = ["Tai Elsner", "Chris Murray", "Dailin Li"];
    var trashHero = ["Josh Battaglia"];

    var duties = ["Wipe down bathroom floor, sink, and toilet (of the bathroom you use, by deposit box).  Empty that bathroom's trash if lid can't swing freely. Spray tub & tub walls with anti-mildew spray and scrub down.  Unclog tub's drains if clogged.", "Wipe down bathroom floor, sink, and toilet (of the bathroom you use, by kitchen).  Empty that bathroom's trash if lid can't swing freely.  Spray tub & tub walls with anti-mildew spray and scrub down. Unclog tub's drains if clogged.", "Sweep common areas (including kitchen), mop specific spots if needed, don't mop everything (dangerous, slippery), only specific spots.", "Wipe down kitchen sink/stove/counters and check fridges for expired items and chuck them.", "Keep kitchen sink filters clean (replace filters if needed, spare filters under sink). Make sure dishes don't pile up, and if possible, let Adan know if anyone doesn't clean their own dishes. Note that dishes are 'wash as you go,' so there should be no dishes in sink, but if there is, we need to know who's leaving dishes in sink, as that's the #1 cause of roommate conflict, so that person has to go."];

    shuffle(bathroom1);
    shuffle(bathroom2);
    console.log(bathroom1);
    console.log(bathroom2);

    $("tbody").append("<tr><td class='firstTD'>" + bathroom1[0] + ":</td><td>" + duties[0] + "</td></tr>");
    $("tbody").append("<tr><td class='firstTD'>" + bathroom2[0] + ":</td><td>" + duties[1] + "</td></tr>");

    duties.shift();
    duties.shift();
    console.log("duties");
    console.log(duties);
    console.log("duties");
    bathroom1.shift();
    bathroom2.shift();

    var arrayOfTenantsLeftAfterBathrooms = bathroom1.concat(bathroom2);
    shuffle(arrayOfTenantsLeftAfterBathrooms);

    for (var i = 0; i < duties.length; i++) {
        $("tbody").append("<tr><td class='firstTD'>" + arrayOfTenantsLeftAfterBathrooms[i] + ":</td><td>" + duties[i] + "</td></tr>");
    }

    $("tbody").append("<tr><td class='firstTD'>" + trashHero[0] + ":</td><td>" + "Take trash out to curb on Sundays and back inside on Mondays.  Check dryer filter (every week)" + "</td></tr>");

    $("#resetMonthlyDutiesButton").on("click", function () {
        resetDuties();
    });

    function resetDuties() {
        $("tbody").empty();

        var bathroom1 = ["Bryan Sanchez", "Robert Centeno"];
        var bathroom2 = ["Tai Elsner", "Chris Murray", "Dailin Li"];
        var trashHero = ["Josh Battaglia"];

        var duties = ["Wipe down bathroom floor, sink, and toilet (of the bathroom you use, by deposit box).  Empty that bathroom's trash if lid can't swing freely. Spray tub & tub walls with anti-mildew spray and scrub down.  Unclog tub's drains if clogged.", "Wipe down bathroom floor, sink, and toilet (of the bathroom you use, by kitchen).  Empty that bathroom's trash if lid can't swing freely.  Spray tub & tub walls with anti-mildew spray and scrub down. Unclog tub's drains if clogged.", "Sweep common areas (including kitchen), mop specific spots if needed, don't mop everything (dangerous, slippery), only specific spots.", "Wipe down kitchen sink/stove/counters and check fridges for expired items and chuck them.", "Keep kitchen sink filters clean, replace if needed.  Make sure dishes don't pile up, and if possible, let Adan know who doesn't clean their own dishes."];

        shuffle(bathroom1);
        shuffle(bathroom2);
        console.log(bathroom1);
        console.log(bathroom2);

        $("tbody").append("<tr><td class='firstTD'>" + bathroom1[0] + ":</td><td>" + duties[0] + "</td></tr>");
        $("tbody").append("<tr><td class='firstTD'>" + bathroom2[0] + ":</td><td>" + duties[1] + "</td></tr>");

        duties.shift();
        duties.shift();
        console.log("duties");
        console.log(duties);
        console.log("duties");
        bathroom1.shift();
        bathroom2.shift();

        var arrayOfTenantsLeftAfterBathrooms = bathroom1.concat(bathroom2);
        shuffle(arrayOfTenantsLeftAfterBathrooms);

        for (var i = 0; i < duties.length; i++) {
            $("tbody").append("<tr><td class='firstTD'>" + arrayOfTenantsLeftAfterBathrooms[i] + ":</td><td>" + duties[i] + "</td></tr>");
        }

        $("tbody").append("<tr><td class='firstTD'>" + trashHero[0] + ":</td><td>" + "Take trash out to curb on Sundays and back inside on Mondays.  Check dryer filter (every week)" + "</td></tr>");
    }

});

















//  Alternate version for when tiny house fello actually uses the main house.
// console.log("connected");

// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;

//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {

//         // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;

//         // And swap it with the current element.
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }

//     return array;
// }



// $(document).ready(function () {
//     //  Check to make sure bathrooms aren't doubled before I send screenshots.
//     var bathroom1 = ["Adan Camacho", "Bryan Sanchez", "Robert Centeno"];
//     var bathroom2 = ["Eric Spoor", "Ivan Contreras"];
//     var trashHero = ["Josh Battaglia"];

//     var duties = ["Wipe down bathroom floor, sink, and toilet (of the bathroom you use, by deposit box).  Empty that bathroom's trash if lid can't swing freely. Spray tub & tub walls with anti-mildew spray and scrub down.  Unclog tub's drains if clogged.", "Wipe down bathroom floor, sink, and toilet (of the bathroom you use, by kitchen).  Empty that bathroom's trash if lid can't swing freely.  Spray tub & tub walls with anti-mildew spray and scrub down. Unclog tub's drains if clogged.", "Sweep common areas, mop specific spots if needed, don't mop everything (dangerous, slippery), only specific spots.", "Make sure dishes don't pile up, and if possible, let Adan know who doesn't clean their own dishes.", "Wipe down kitchen sink and empty/clean kitchen sink filters.  Wipe down stove/counters, and check fridges for expired items, chuck expired items."];

//     shuffle(bathroom1);
//     shuffle(bathroom2);
//     console.log(bathroom1);
//     console.log(bathroom2);

//     $("tbody").append("<tr><td class='firstTD'>" + bathroom1[0] + ":</td><td>" + duties[0] + "</td></tr>");
//     $("tbody").append("<tr><td class='firstTD'>" + bathroom2[0] + ":</td><td>" + duties[1] + "</td></tr>");

//     duties.shift();
//     duties.shift();
//     console.log("duties");
//     console.log(duties);
//     console.log("duties");
//     bathroom1.shift();
//     bathroom2.shift();

//     var arrayOfTenantsLeftAfterBathrooms = bathroom1.concat(bathroom2);
//     shuffle(arrayOfTenantsLeftAfterBathrooms);

//     for (var i = 0; i < duties.length; i++) {
//         $("tbody").append("<tr><td class='firstTD'>" + arrayOfTenantsLeftAfterBathrooms[i] + ":</td><td>" + duties[i] + "</td></tr>");
//     }

//     $("tbody").append("<tr><td class='firstTD'>" + trashHero[0] + ":</td><td>" + "Take trash out to curb on Sundays and back inside on Mondays.  Check dryer filter (every week)" + "</td></tr>");

//     $("#resetMonthlyDutiesButton").on("click", function () {
//         resetDuties();
//     });

//     function resetDuties() {
//         $("tbody").empty();

//         var bathroom1 = ["Adan Camacho", "Bryan Sanchez", "Robert Centeno"];
//         var bathroom2 = ["Eric Spoor", "Ivan Contreras"];
//         var trashHero = ["Josh Battaglia"];

//         var duties = ["Wipe down bathroom floor, sink, and toilet (of the bathroom you use, by deposit box).  Empty that bathroom's trash if lid can't swing freely. Spray tub & tub walls with anti-mildew spray and scrub down.  Unclog tub's drains if clogged.", "Wipe down bathroom floor, sink, and toilet (of the bathroom you use, by kitchen).  Empty that bathroom's trash if lid can't swing freely.  Spray tub & tub walls with anti-mildew spray and scrub down. Unclog tub's drains if clogged.", "Sweep common areas, mop specific spots if needed, don't mop everything (dangerous, slippery), only specific spots.", "Make sure dishes don't pile up, and if possible, let Adan know who doesn't clean their own dishes.", "Wipe down kitchen sink and empty/clean kitchen sink filters.  Wipe down stove/counters, and check fridges for expired items, chuck expired items."];

//         shuffle(bathroom1);
//         shuffle(bathroom2);
//         console.log(bathroom1);
//         console.log(bathroom2);

//         $("tbody").append("<tr><td class='firstTD'>" + bathroom1[0] + ":</td><td>" + duties[0] + "</td></tr>");
//         $("tbody").append("<tr><td class='firstTD'>" + bathroom2[0] + ":</td><td>" + duties[1] + "</td></tr>");

//         duties.shift();
//         duties.shift();
//         console.log("duties");
//         console.log(duties);
//         console.log("duties");
//         bathroom1.shift();
//         bathroom2.shift();

//         var arrayOfTenantsLeftAfterBathrooms = bathroom1.concat(bathroom2);
//         shuffle(arrayOfTenantsLeftAfterBathrooms);

//         for (var i = 0; i < duties.length; i++) {
//             $("tbody").append("<tr><td class='firstTD'>" + arrayOfTenantsLeftAfterBathrooms[i] + ":</td><td>" + duties[i] + "</td></tr>");
//         }

//         $("tbody").append("<tr><td class='firstTD'>" + trashHero[0] + ":</td><td>" + "Take trash out to curb on Sundays and back inside on Mondays.  Check dryer filter (every week)" + "</td></tr>");
//     }

// });

















