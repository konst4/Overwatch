/**
 * Created by Collin on 10/19/2016.
 */
describe("D3 graph", function(){
    var TestUtils = React.addons.TestUtils;
    var BubbleComponent, element, renderedDOM;
    beforeEach(function(done){
        element = React.createElement(Bubble);
        Bubble = TestUtils.renderIntoDocument(element);
        Bubble.setState({items: [{text: "testItem"}]}, done);
    });
    it("Exists", function(){
        let bubble = TestUtils.scryRenderedDOMComponentsWithTag(Bubble,"h1");
        expect(bubble).toBeDefined();
    });
});