import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  align-content: ${(props) => props.alignContent};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
`;

class Container extends React.Component {
  render() {
    const {
      children,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent,
      height,
      minHeight
    } = this.props;
    return (
      <ContainerStyled
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        flexWrap={flexWrap}
        alignItems={alignItems}
        alignContent={alignContent}
        height={height}
        minHeight={minHeight}
      >
        {children}
      </ContainerStyled>
    );
  }

  static defaultProps = {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    height: "auto",
    minHeight: "initial"
  };

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    flexDirection: PropTypes.oneOfType([
      "row",
      "row-reverse",
      "column",
      "column-reverse"
    ]),
    flexWrap: PropTypes.oneOfType(["nowrap", "wrap", "wrap-reverse"]),
    justifyContent: PropTypes.oneOfType([
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
      "start",
      "end",
      "left",
      "right"
    ]),
    alignItems: PropTypes.oneOfType([
      "stretch",
      "flex-start",
      "flex-end",
      "center",
      "baseline",
      "first baseline",
      "last baseline",
      "start",
      "end",
      "self-start",
      "self-end"
    ]),
    alignContent: PropTypes.oneOfType([
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
      "stretch",
      "start",
      "end",
      "baseline",
      "first baseline",
      "last baseline"
    ]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minHeight: PropTypes.string
  };
}

export default Container;
