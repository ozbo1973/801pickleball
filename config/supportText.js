import { UnorderedList, ListItem, Text } from "@chakra-ui/react";

export const opaText = () => {
  return (
    <>
      <Text mb="2rem">
        The Ogden Pickleball Association focuses on promoting and giving back to
        the Pickleball community in Northern Utah, some of the ways we are able
        to do this include:
      </Text>

      <UnorderedList>
        <ListItem>Discounts on popular equipment sites</ListItem>
        <ListItem>
          Connecting local Pickleball players in the area with a member
          directory
        </ListItem>
        <ListItem>
          Access to tournaments, clinics, and whistle stop play
        </ListItem>
        <ListItem>Exclusive member benefits including rentals</ListItem>
      </UnorderedList>
    </>
  );
};

export const shedText = () => (
  <>
    <Text mb="1rem">
      Welcome to The Shed. We are passionate about Pickleball and have felt the
      frustration of poor quality facilities during the harsh winter or heat of
      the summer.
    </Text>

    <Text>
      We have 4 permanent (concrete) pickleball courts with permanent
      professional nets in our temperature controlled building designed for all
      year play. We have league play, open play, skill training, private court
      rental, and tournaments.
    </Text>
  </>
);

export const safeHarborText = () => (
  <>
    <Text mb="1.5rem">
      Free domestic abuse and sexual assault services are available 24/7 -
      801.444.9161
    </Text>

    <Text>
      Safe Harbor Crisis Center provides shelter, supportive services and
      advocacy to survivors of domestic abuse and sexual assault, as well as
      education, awareness and resources to our community.
    </Text>
  </>
);
