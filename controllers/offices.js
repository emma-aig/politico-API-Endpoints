import office from "../database/database";

// Get a specific political office
export function getOffice (req, res) {
    const id = parseInt(req.params.id, 10);
    office.map((office) => {
        if (office.id === id) {
            return res.status(200).send({
                success: "true",
                message: "Data retrieved successfully",
                office: office,
            });
        } 
    });
    return res.status(404).send({
        success: "false",
        message: "Data does not exist",
    });
}

// Get all political officies
export function getOffices (req, res) {
    res.status(200).send({
        success: "true",
        message: "Data retrieved successfully",
        office: office,
    });
}

// Create a political office
export function createOffice (req, res) {
    if(!req.body.type) {
        return res.status(400).send({
            success: "false",
            message: "type is required",
        });
    } else if(!req.body.name) {
        return res.status(400).send({
            success: "false",
            message: "name is required",
        });
    }
    const officeData = {
        id: office.length + 1,
        type: req.body.type,
        name: req.body.name
    };
    office.push(officeData);
    return res.status(201).send({
        success: "true",
        message: "Office created successfully",
        office,
    });
}
