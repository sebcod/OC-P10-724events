import { render, screen } from "@testing-library/react";
import md5 from "md5";
import Icon from ".";

/*
  change "icon" to "icon-twitch"
  and implement facebook, twitter, youtube, close tests
*/

describe("Icon component", () => {
  describe("When a icon is created with name twitch", () => {
    it("the icon contain this path hash value 327fbc38c8e878259c3ec35ef231517a", () => {
      render(<Icon name="twitch" />);
      // change "icon" to "icon-twitch"
      expect(md5(screen.getByTestId("icon-twitch").getAttribute("d"))).toEqual(
        "327fbc38c8e878259c3ec35ef231517a"
      );
    });
  });

  // to complete
  describe("When a icon is created with name facebook", () => {
    it("the icon contain this path hash value bbea4c9e40773b969fdb6e406059f853", () => {
      render(<Icon name="facebook" />);
      expect(
        md5(screen.getByTestId("icon-facebook").getAttribute("d"))
      ).toEqual("bbea4c9e40773b969fdb6e406059f853");
    });
  });
  describe("When a icon is created with name twitter", () => {
    it("the icon contain this path hash value 82f5be4a5c07199cb75dacec50b90b2a", () => {
      render(<Icon name="twitter" />);
      expect(md5(screen.getByTestId("icon-twitter").getAttribute("d"))).toEqual(
        "82f5be4a5c07199cb75dacec50b90b2a"
      );
    });
  });
  describe("When a icon is created with name youtube", () => {
    it("the icon contain this path hash value 43342876c2fc40e5b2afe621443ff95b", () => {
      render(<Icon name="youtube" />);
      expect(md5(screen.getByTestId("icon-youtube").getAttribute("d"))).toEqual(
        "43342876c2fc40e5b2afe621443ff95b"
      );
    });
  });
  describe("When a icon is created with name close", () => {
    it("the icon contain this path hash value fe53fa5bf815b6d5983fcadf9a15d3d1", () => {
      render(<Icon name="close" />);
      expect(md5(screen.getByTestId("icon-close").getAttribute("d"))).toEqual(
        "fe53fa5bf815b6d5983fcadf9a15d3d1"
      );
    });
  });
});
