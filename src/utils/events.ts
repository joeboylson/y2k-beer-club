import { v4 as uuidv4 } from "uuid";
import { Y2KEvent } from "../types";

export const events: Y2KEvent[] = [
  {
    date: new Date("01/10/2025"),
    time: "7PM",
    locationName: "Big Ash Brewing",
    address: "5230 Beechmont Ave, Cincinnati, OH 45230",
    canceledReason: "[Canceled due to weather]",
  },
  {
    date: new Date("01/24/2025"),
    time: "7PM",
    locationName: "Big Ash Brewing",
    address: "5230 Beechmont Ave, Cincinnati, OH 45230",
  },
  {
    date: new Date("02/14/2025"),
    time: "7PM",
    locationName: "Fabled Brew Works",
    address: "331 Kenton Lands Rd Suite 300, Erlanger, KY 41018",
  },
  {
    date: new Date("03/14/2025"),
    time: "7PM",
    locationName: "HighGrain Taproom & Kitchen",
    address: "6860 Plainfield Rd, Cincinnati, OH 45236",
    canceledReason: "[rescheduling to Sunday (03/16)]",
  },
  {
    date: new Date("03/16/2025"),
    time: "7PM",
    locationName: "HighGrain Taproom & Kitchen",
    address: "6860 Plainfield Rd, Cincinnati, OH 45236",
  },
  {
    date: new Date("04/13/2025"),
    time: "7PM",
    locationName: "MadTree Parks & Rec + Event Spaces",
    address: "4321 Glendale Milford Rd, Blue Ash, OH 45242",
  },
  {
    date: new Date("05/09/2025"),
    time: "7PM",
    locationName: "Vinoklet Winery & Restaurant",
    address: "11069 Colerain Ave, Cincinnati, OH 45252",
  },
  {
    date: new Date("06/13/2025"),
    time: "7PM",
    locationName: "Braxton Brewing Company",
    address: "27 W 7th St, Covington, KY 41011",
  },
  {
    date: new Date("07/11/2025"),
    time: "7PM",
    locationName: "Fretboard Brewing (Factory 52)",
    address: "2750 Park Ave Suite O, Norwood, OH 45212",
  },
  {
    date: new Date("08/08/2025"),
    time: "7PM",
    locationName: "Dead Low Brewing",
    address: "5959 Kellogg Ave, Cincinnati, OH 45230",
  },
  {
    date: new Date("09/12/2025"),
    locationName: "Braxton Brewing Company",
    address: "8901 US-42, Union, KY 41091",
    time: "7PM",
  },
  {
    date: new Date("10/24/2025"),
    time: "7PM",
    locationName: "Third Eye Brewing Company",
    address: "11276 Chester Rd, Cincinnati, OH 45246",
  },
  {
    date: new Date("11/14/2025"),
    time: "7PM",
  },
  {
    date: new Date("12/12/2025"),
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
