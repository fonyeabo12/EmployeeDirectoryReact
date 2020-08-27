import React, { useContext } from "react";
import Body from "./Body";

import InfoAreaContext from "./utils/InfoAreaContext";

const Table = () => {
    const context = useContext(InfoAreaContext);

    return (

        <div className="table mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {context.present.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        context.handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <Body />
            </table>
        </div>
    );
}

export default Table;