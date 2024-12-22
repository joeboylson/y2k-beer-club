import { ShareNetwork } from "@phosphor-icons/react";
import Details from "../../components/Details";
import styled from "styled-components";
import { useEffect } from "react";
import Tag from "../../components/Tag";

const ShareButton = styled.button`
  background-color: rgba(0, 0, 0, 0.1);
  border: 0;
  outline: none;
  height: 24px;
  display: grid;
  grid-template-columns: 16px 56px;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-family: "Azeret Mono", monospace;
  padding: 0 12px;
  margin-top: 8px;
  border-radius: 24px;
`;

const EventsTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding-bottom: 48px;

  * {
    text-align: center;
  }

  @media (max-width: 600px) {
    padding-bottom: 0px;
  }
`;

type Event = {
  date: Date;
  time?: string;
  locationName?: string;
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
    time: "7PM",
    locationName: "Big Ash Brewing",
    address: "5230 Beechmont Ave, Cincinnati, OH 45230",
  },
  {
    date: new Date("02/14/2025"),
    time: "7PM",
  },
  {
    date: new Date("03/14/2025"),
    time: "7PM",
  },
  {
    date: new Date("04/11/2025"),
    time: "7PM",
  },
  {
    date: new Date("05/09/2025"),
    time: "7PM",
  },
  {
    date: new Date("06/13/2025"),
    time: "7PM",
  },
  {
    date: new Date("07/11/2025"),
    time: "7PM",
  },
  {
    date: new Date("08/08/2025"),
    time: "7PM",
  },
  {
    date: new Date("09/12/2025"),
    time: "7PM",
  },
  {
    date: new Date("10/10/2025"),
    time: "7PM",
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

export default function Events() {
  useEffect(() => {
    setTimeout(() => {
      const hash = window.location.hash;

      if (hash) {
        const element = document.querySelector(hash);
        const top = (element?.getBoundingClientRect()?.top ?? 0) - 10;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 500);
  }, []);

  return (
    <>
      <EventsTitleWrapper>
        <h3>Monthly Events (2025)</h3>
        <Tag>2nd Friday of every month</Tag>
      </EventsTitleWrapper>

      <Details
        details={events.map((event) => {
          const { date, time, locationName, address } = event;
          const dateString = date.toLocaleDateString("en-US", eventFormat);
          const _id = date.toDateString().toLowerCase().replaceAll(" ", "");

          const isPassed = Date.now() > date.valueOf();
          const showPlaceAndAddress = !!locationName && !!address;
          const canShare = !!navigator.share;

          const _handleShare = async () => {
            try {
              await navigator.share({
                url: `${window.location.href}#${_id}`,
                text: `Y2KBC: ${dateString} - ${time} at ${address}`,
                title: "You're invited to Y2K Beer Club!",
              });
            } catch (e) {
              console.error(e);
            }
          };

          if (isPassed) {
            return [dateString, <code>[Passed]</code>];
          }

          return [
            <div>
              <p>
                {dateString} @ {time}
              </p>
            </div>,
            <div id={_id}>
              {showPlaceAndAddress ? (
                <>
                  <p>
                    {locationName}: {address}
                  </p>
                  {canShare && (
                    <ShareButton onClick={_handleShare}>
                      <ShareNetwork size={16} />
                      Share
                    </ShareButton>
                  )}
                </>
              ) : (
                "(TBA)"
              )}
            </div>,
          ];
        })}
      />
    </>
  );
}
