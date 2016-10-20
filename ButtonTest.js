/**
 * Created by Collin on 10/19/2016.
 */
describe("Search button", function(){
    var TestUtils = React.addons.TestUtils;
    var search, element, renderedDOM;
    beforeEach(function(done){
        element = React.createElement(search);
        TitleComponent = TestUtils.renderIntoDocument(element);
        TitleComponent.setState({items: [{text: "testItem"}]}, done);
    });
    it("Exists", function(){
        let button = TestUtils.scryRenderedDOMComponentsWithTag(TitleComponent,"h1");
        expect(button).toBeDefined();
    });
});