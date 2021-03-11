import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './HabitTabWidget.scss';

class HabitTabWidget extends Component {
    constructor(props){
        super(props);
        this.state ={
            sizes: {},
        };
        this.els = {};
    }
    componentDidMount() {
        this.getSizes();
    }

    //give width for later animation on tab onChange to active state.
    getSizes() {
        const rootBounds = this.root.getBoundingClientRect();
    
        const sizes = {};
    
        Object.keys(this.els).forEach((key) => {
          const el = this.els[key];
          const bounds = el.getBoundingClientRect();
    
          const left = bounds.left - rootBounds.left;
          const right = rootBounds.right - bounds.right;
    
          sizes[key] = {left, right};
        });

        this.setState({sizes});
        return sizes;
    }
    render() {
        console.log (this.state);
        
        return (
            <div className='HabitTabWidget'
              ref = {el => this.root = el}
            >
                
                {/* transform each child via map function. */}
                {React.Children.map (this.props.children, (child, i) => {
                    //if tab is active, add active class so it sbg color is yellow 
                    let classname = `Tabs__Tab`; 
                    if (child.key ===this.props.active) {
                        classname = `${classname} Tabs__Tab--active`;
                    }
                    return (

                        //return react element after mapping all children
                        <div 
                         className={classname}
                          onClick={()=>{
                             this.props.onChange(child.key);
                         }}
                         ref = {el => this.els[child.key] = el} 
                        >
                            {/* pass child in here */}
                           {child} 
                        </div>   
                    );
                })}
                <div 
                  className='Tabs__animate'
                  style={this.getAnimateStyle()}
                />
            </div>
        );
    }


    //use below function to animate the tab as per active state 
    getAnimateStyle () {
        if (this.props.active === null || Object.keys(this.state.sizes).length === 0) {
            return {left: '0', right: '100%'};
        }

        const size = this.state.sizes[this.props.active];
        return {left: `${size.left}px`, right:`${size.right}px`}
    }
}
export default HabitTabWidget;