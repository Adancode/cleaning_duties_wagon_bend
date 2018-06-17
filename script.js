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
    var bathroom1 = ["Adan Camacho", "Bryan Sanchez", "Robert Centeno"];
    var bathroom2 = ["Eric Spoor", "Ivan Contreras"];
    var trashHero = ["Josh Battaglia"];

    var duties = ["Wipe down bathroom floor, sink, and toilet (of the bathroom you use).  Empty that bathroom's trash if lid can't swing freely. Spray tub & tub walls with anti-mildew spray and scrub down.  Unclog tub's drains if clogged.", "Wipe down bathroom floor, sink, and toilet (of the bathroom you use).  Empty that bathroom's trash if lid can't swing freely.  Spray tub & tub walls with anti-mildew spray and scrub down. Unclog tub's drains if clogged.", "Sweep common areas, mop specific spots if needed, don't mop everything (dangerous, slippery), only specific spots.", "Make sure dishes don't pile up, and if possible, let Adan know who doesn't clean their own dishes.", "Wipe down kitchen sink and empty/clean kitchen sink filters.  Wipe down stove/counters, and check fridges for expired items, chuck expired items."];

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

        var bathroom1 = ["Adan Camacho", "Bryan Sanchez", "Robert Centeno"];
        var bathroom2 = ["Eric Spoor", "Ivan Contreras"];
        var trashHero = ["Josh Battaglia"];

        var duties = ["Wipe down bathroom floor, sink, and toilet (of the bathroom you use).  Empty that bathroom's trash if lid can't swing freely. Spray tub & tub walls with anti-mildew spray and scrub down.  Unclog tub's drains if clogged.", "Wipe down bathroom floor, sink, and toilet (of the bathroom you use).  Empty that bathroom's trash if lid can't swing freely.  Spray tub & tub walls with anti-mildew spray and scrub down. Unclog tub's drains if clogged.", "Sweep common areas, mop specific spots if needed, don't mop everything (dangerous, slippery), only specific spots.", "Make sure dishes don't pile up, and if possible, let Adan know who doesn't clean their own dishes.", "Wipe down kitchen sink and empty/clean kitchen sink filters.  Wipe down stove/counters, and check fridges for expired items, chuck expired items."];

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






















// Used like so
// dutiesShuffled = 
// shuffle(duties);
// shuffle(tenants);
// console.log("the duties");
// console.log(duties);
// console.log(dutiesShuffled);
// console.log(tenantsShuffled);

//  An object holding all the duties
// var monthlySchedule = {
//     "Samuel Guebara": "Take trash out to curb on Sundays and back inside on Mondays"
// }

// function resetDuties() {
//     $("tbody").empty();

//     shuffle(duties);
//     shuffle(tenants);
//     // for (var i = 0; i < tenants.length; i++) {
//     //     monthlySchedule[tenants[i]] = duties[i];
//     //     //$("tbody").append("<tr><td>" +  + "</td></tr>");
//     // }
//     duties.push("Take trash out to curb on Sundays and back inside on Mondays.  Check dryer filter (every week)");
//     tenants.push("Josh Battaglia");

//     for (var i = 0; i < duties.length; i++) {
//         $("tbody").append("<tr><td class='firstTD'>" + tenants[i] + ":</td><td>" + duties[i] + "</td></tr>");
//     }

//     duties.pop();
//     tenants.pop();

//     // for (key in monthlySchedule) {
//     //     $("tbody").append("<tr><td class='firstTD'>" + key + ":</td><td>" + monthlySchedule[key] + "</td></tr>");
//     // }
// }

// $(document).ready(function () {



// // for (var i = 0; i < tenants.length; i++) {
// //     monthlySchedule[tenants[i]] = duties[i];
// //     //$("tbody").append("<tr><td>" +  + "</td></tr>");
// // }

// duties.push("Take trash out to curb on Sundays and back inside on Mondays.  Check dryer filter (every week)");
// tenants.push("Josh Battaglia");
// console.log(duties);
// console.log(tenants);

// for (var i = 0; i < duties.length; i++) {
//     $("tbody").append("<tr><td class='firstTD'>" + tenants[i] + ":</td><td>" + duties[i] + "</td></tr>");
// }

// duties.pop();
// tenants.pop();
// $("tbody").append("<tr>" + "hahah" + "</tr>");
// $("tbody").append("haha");
// });

// console.log(monthlySchedule);