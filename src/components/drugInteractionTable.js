import React from 'react';

const drugInteractionTable = (props) => {
    const {drugData} = props;
    if (!drugData || drugData.length === 0) return <p style={{ textAlign: 'center', fontSize: '20px' }}>No data, sorry</p>;
    return (
        (drugData.map((drug, index) => (
            <div key= {index}>
            
            <table>
            <tr>                
                <th>Name</th>
                <th>Severity</th>
                <th>Description</th>
                <th>URL</th>
            </tr> 
            
            <tr>                     
            <td>{drug.interactionTypeGroup[0].interactionType[0].minConceptItem.rxcui}</td>
            <td>{drug.interactionTypeGroup[0].interactionType[0].minConceptItem.name}</td>
            <td>{drug.interactionTypeGroup[0].interactionType[0].minConceptItem.tty}</td>
            </tr> 
            </table>
            </div>           
        )))             
    );
};

export default drugInteractionTable;