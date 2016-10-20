/**
 * Created by konstantin on 10/19/16.
 */

describe("Header", function(){
    var TestUtils = React.addons.TestUtils;
    var HeaderComponent, element, renderedDOM;
    beforeEach(function(done){
       element= React.createElement(Header);
        HeaderComponent = TestUtils.renderIntoDocument(element);
        HeaderComponent.setState({items: [{text: "testItem"}]}, done);
    });
    t("Exists", function(){
        let title = TestUtils.scryRenderedDOMComponentsWithTag(HeaderComponent,"Title");
        expect(title).toBeDefined();
        // checks if the title component has been rendered
        let input = TestUtils.scryRenderedDOMComponentsWithTag(HeaderComponent,"input");
        expect(input).toBeDefined();
        // checks if the input has been rendered
        let button = TestUtils.scryRenderedDOMComponentsWithTag(HeaderComponent,"Button");
        expect(button).toBeDefined();
        // checks if the button has been rendered
    });
});