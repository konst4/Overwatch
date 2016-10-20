/**
 * Created by Collin on 10/20/2016.
 */
describe("Header of document", function(){
    var TestUtils = React.addons.TestUtils;
    var HeaderComponent, element, renderedDOM;
    beforeEach(function(done){
        element = React.createElement(form action);
        HeaderComponent = TestUtils.renderIntoDocument(element);
        HeaderComponent.setState({items: [{text: "testItem"}]}, done);
    });
    it("Exists", function(){
        let form = TestUtils.scryRenderedDOMComponentsWithTag(TitleComponent,"form action");
        expect(form).toBeDefined();
    });
});