import { v4 as uuidv4 } from "uuid";
import { Y2KEvent } from "../types";

// Previous event locations:
// January: Big Ash Brewing - 5230 Beechmont Ave, Cincinnati, OH 45230
// February: Fabled Brew Works - 331 Kenton Lands Rd Suite 300, Erlanger, KY 41018
// March: HighGrain Taproom & Kitchen - 6860 Plainfield Rd, Cincinnati, OH 45236
// April: MadTree Parks & Rec + Event Spaces - 4321 Glendale Milford Rd, Blue Ash, OH 45242
// May: Vinoklet Winery & Restaurant - 11069 Colerain Ave, Cincinnati, OH 45252
// June: Braxton Brewing Company - 27 W 7th St, Covington, KY 41011
// July: Fretboard Brewing (Factory 52) - 2750 Park Ave Suite O, Norwood, OH 45212
// August: Dead Low Brewing - 5959 Kellogg Ave, Cincinnati, OH 45230
// September: Braxton Brewing Company - 8901 US-42, Union, KY 41091
// October: Hofbräuhaus - 200 3rd St, Newport, KY 41071

export const events: Y2KEvent[] = [
  {
    date: new Date("01/16/2026"),
    time: "7PM",
    locationName: "Braxton Brewing Company",
    address: "27 W 7th St, Covington, KY 41011",
  },
  {
    date: new Date("02/20/2026"),
    time: "7PM",
  },
  {
    date: new Date("03/13/2026"),
    time: "7PM",
  },
  {
    date: new Date("04/10/2026"),
    time: "7PM",
  },
  {
    date: new Date("05/08/2026"),
    time: "7PM",
  },
  {
    date: new Date("06/12/2026"),
    time: "7PM",
  },
  {
    date: new Date("07/10/2026"),
    time: "7PM",
  },
  {
    date: new Date("08/14/2026"),
    time: "7PM",
  },
  {
    date: new Date("09/11/2026"),
    time: "7PM",
  },
  {
    date: new Date("10/09/2026"),
    time: "7PM",
  },
  {
    date: new Date("11/13/2026"),
    time: "7PM",
  },
  {
    date: new Date("12/11/2026"),
    time: "7PM",
  },
];

const ICS_HEADER = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//hacksw/handcal//NONSGML v1.0//EN`;

const ICS_FOOTER = `
END:VCALENDAR`;

export function generateICSFile() {
  const filename = "Y2K_Events.ics";

  let ICS_events = ``;

  events.forEach((event) => {
    const { date, time, locationName, address } = event;

    const name = locationName
      ? `Y2K Beer Club at ${locationName}`
      : `Y2K Beer Club (TBD)`;

    const uid = uuidv4();
    const formattedDate = formatDateToICS(date);
    const dtStartTime = convertToMilitaryTime(time);
    const dtEndTime = convertToMilitaryTime("11PM");

    const dtStart = `${formattedDate}T${dtStartTime}Z`;
    const dtEnd = `${formattedDate}T${dtEndTime}Z`;

    const ICS_event = `
BEGIN:VEVENT
UID:${uid}
ORGANIZER;CN=Joe Boylson:MAILTO:joeboylson@gmail.com
DTSTART;TZID=America/New_York:${dtStart}
DTEND;TZID=America/New_York:${dtEnd}
SUMMARY:${name}
URL:${window.location.href}
LOCATION:${address}
END:VEVENT`;

    ICS_events = `${ICS_events}${ICS_event}`;
  });

  const eventData = `${ICS_HEADER}${ICS_events}${ICS_FOOTER}`;

  const blob = new Blob([eventData], { type: "text/calendar" });

  const elem = window.document.createElement("a");
  elem.href = window.URL.createObjectURL(blob);
  elem.download = filename;
  document.body.appendChild(elem);
  elem.click();
  document.body.removeChild(elem);
}

function formatDateToICS(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

function convertToMilitaryTime(timeString: string) {
  const [time, period] = timeString.match(/(\d+)(AM|PM)/i)?.slice(1, 3) ?? [
    "",
    "",
  ];
  let hours = parseInt(time, 10);

  if (period.toUpperCase() === "PM" && hours !== 12) {
    hours += 12;
  } else if (period.toUpperCase() === "AM" && hours === 12) {
    hours = 0;
  }

  const militaryTime = String(hours).padStart(2, "0") + "0000";
  return militaryTime;
}
