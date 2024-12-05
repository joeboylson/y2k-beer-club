import Details from "../../components/Details";

type Event = {
  date: Date;
  locationName: string;
  address?: string;
};

const eventFormat: Intl.DateTimeFormatOptions = {
  weekday: "short",
  month: "long",
  day: "numeric",
};

const events: Event[] = [
  {
    date: new Date("01/10/2025"),
    locationName: "(TBA)",
  },
  {
    date: new Date("02/14/2025"),
    locationName: "(TBA)",
  },
  {
    date: new Date("03/14/2025"),
    locationName: "(TBA)",
  },
  {
    date: new Date("04/11/2025"),
    locationName: "(TBA)",
  },
  {
    date: new Date("05/09/2025"),
    locationName: "(TBA)",
  },
  {
    date: new Date("06/13/2025"),
    locationName: "(TBA)",
  },
  {
    date: new Date("07/11/2025"),
    locationName: "(TBA)",
  },
  {
    date: new Date("08/08/2025"),
    locationName: "(TBA)",
  },
  {
    date: new Date("09/12/2025"),
    locationName: "(TBA)",
  },
  {
    date: new Date("10/10/2025"),
    locationName: "(TBA)",
  },
  {
    date: new Date("11/14/2025"),
    locationName: "(TBA)",
  },
  {
    date: new Date("12/12/2025"),
    locationName: "(TBA)",
  },
];

export default function Events() {
  return (
    <>
      <h3>Monthly Events (2025)</h3>
      <code>(events held on the 2nd Friday of every month)</code>

      <Details
        details={events.map((event) => {
          const { date, locationName, address } = event;
          const dateString = date.toLocaleDateString("en-US", eventFormat);
          const isPassed = Date.now() > date.valueOf();

          if (isPassed) {
            return [dateString, <code>[Passed]</code>];
          }

          return [
            dateString,
            <div>
              <p>{locationName}</p>
              {address && <code>({address})</code>}
            </div>,
          ];
        })}
      />
    </>
  );
}
