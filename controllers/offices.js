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
