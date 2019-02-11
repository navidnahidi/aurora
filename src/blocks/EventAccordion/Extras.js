import React from "react";
// import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Text } from "../../components/Text";
import { Row as AuroraRow, Column as AuroraCol } from "../../components/Grid";
import COLORS from "../../theme/colors";
import Icon from "./Icon";

// import spacing from "../../theme/spacing";

const ExtrasWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 16px 16px 47px;

  && > div:nth-child(n + 2) {
    margin-left: 16px;
  }
`;

const ExtraTitle = styled(Text)`
  margin: 0;
`;

const Extra = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;

const ExtraItem = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const ExtrasText = styled(Text)`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  line-height: 1.5;
  margin: 0;
`;

const ExtraOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`;

const SubTitle = styled(Text)`
  color: grey;
  margin: 0;
`;

const getIconName = (title, extra) =>
  title === "LINEUP"
    ? "Avatar"
    : title === "MORE"
      ? "tickets"
      : title === "VENUE INFO"
        ? title
        : extra.title;

const Extras = ({ data }) => (
  <ExtrasWrapper>
    {data.map(({ title, id, items }) => (
      <Extra key={id}>
        <ExtraTitle primary size="kilo" weight="semiBold" tag="p">
          {title}
        </ExtraTitle>
        {items.map(extra => (
          <ExtraItem key={extra.title + id}>
            <Icon
              key={extra.title}
              name={getIconName(title, extra)}
              size={26}
              src={extra.src}
              color={COLORS.blackPearl}
            />
            <ExtraOptions>
              <ExtrasText
                primary
                size="uno"
                tag="p"
                href={extra.href}
                onClick={extra.onClick}
              >
                {extra.title}
              </ExtrasText>
              {extra.subTitle && (
                <SubTitle primary size="uno" tag="p">
                  {extra.subTitle}
                </SubTitle>
              )}
            </ExtraOptions>
          </ExtraItem>
        ))}
      </Extra>
    ))}
  </ExtrasWrapper>
);

export default Extras;