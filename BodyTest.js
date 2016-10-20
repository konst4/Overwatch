/**
 * Created by Collin on 10/19/2016.
 */
/**
 * Created by Collin on 10/19/2016.
 */
describe("Body of document", function(){
    var TestUtils = React.addons.TestUtils;
    var BodyComponent, element, renderedDOM;
    beforeEach(function(done){
        element = React.createElement(Body);
        BodyComponent = TestUtils.renderIntoDocument(element);
        BodyComponent.setState({items: [{text: "testItem"}]}, done);
    });
    it("Exists", function(){
        let body = TestUtils.scryRenderedDOMComponentsWithTag(BodyComponent,"h1");
        expect(body).toBeDefined();
    });
});