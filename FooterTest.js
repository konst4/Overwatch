/**
 * Created by Collin on 10/19/2016.
 */
describe("footer of document", function(){
    var TestUtils = React.addons.TestUtils;
    var footerComponent, element, renderedDOM;
    beforeEach(function(done){
        element = React.createElement(footer);
        footerComponent = TestUtils.renderIntoDocument(element);
        footerComponent.setState({items: [{text: "testItem"}]}, done);
    });
    it("Exists", function(){
        let footer = TestUtils.scryRenderedDOMComponentsWithTag(footerComponent,"footer");
        expect(footer).toBeDefined();
    });
});