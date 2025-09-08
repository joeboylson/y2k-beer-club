import { ShareNetwork } from "@phosphor-icons/react";
import Details from "../../components/Details";
import styled from "styled-components";
import { useEffect } from "react";
import Tag from "../../components/Tag";
import { events, generateICSFile } from "../../utils";

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

const DownloadCalendarButton = styled.button`
  width: fit-content;
  margin: 24px auto;
  background-color: #ff4003;
  color: white;
  padding: 8px 16px;
  border: 0;
  outline: none;
  border-radius: 100px;
`;

const eventFormat: Intl.DateTimeFormatOptions = {
  weekday: "short",
  month: "long",
  day: "numeric",
};

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

      <DownloadCalendarButton onClick={generateICSFile}>
        Download Calendar
      </DownloadCalendarButton>

      <Details
        details={events.map((event) => {
          const { date, time, locationName, address, canceledReason } = event;
          const dateString = date.toLocaleDateString("en-US", eventFormat);
          const _id = date.toDateString().toLowerCase().replaceAll(" ", "");

          const isPassed = Date.now() > date.valueOf();
          const isCanceled = !!event.canceledReason;
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

          if (isCanceled) {
            return [
              <p className={isPassed ? "passed" : ""}>{dateString}</p>,
              <code className={isPassed ? "passed" : ""}>
                {isCanceled && canceledReason}
              </code>,
            ];
          }

          return [
            <div className={isPassed ? "passed" : ""}>
              <p>
                {dateString} @ {time}
              </p>
            </div>,
            <div id={_id} className={isPassed ? "passed" : ""}>
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
