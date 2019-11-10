import React from "react"
import renderer from "react-test-renderer"

import Header from "./header";

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  });

  it('should not be null', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).not.toBeNull;
  });

  it('should not have length', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).toBe(1);
  })
})

