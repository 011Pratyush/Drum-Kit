function anotherAddEventListener(typeOfEvent, callback)
{
    var eventThatHappened = {
        eventType : "keypress",
        key: "p",
        durationOfKeypress: 2
    }

    if(eventThatHappened.eventType === typeOfEvent)
    {
        callback(eventThatHappened);
    }
}

// Adding anima
