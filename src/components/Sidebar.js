import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <div>
                <h3>Title</h3>
            </div>
            <div>
                <h4>Events</h4>
            </div>
            <div>
                <button className="item">
                    Japan 12/19
                </button>
            </div>
            <div>
            <button className="item">
                Kevin's Wedding
            </button>
            </div>
            <div>
                <button className="item">
                    Add New Event
                </button>
            </div>
        </div>
    )
}

export default Sidebar