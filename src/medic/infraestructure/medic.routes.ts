
import { MedicOperation } from "./medic.operation";
import { MedicUseCase } from "../application/medic.usecase";
import { MedicController } from "./medic.controller";

const medicOperation = new MedicOperation();
const medicUseCase = new MedicUseCase(medicOperation);
const medicController = new MedicController(medicUseCase);

// Shared
import { baseRouter } from "../../base-crud/infraestructure/router/base-router";

/*router.get("/", async (req, res) => {
  const result = medicController.getAll(true);
  /*   res.writeHead(200, {"content-type": "application/json"})
  res.end(JSON.stringify(result))
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const result = await medicController.getOne(1);
  res.json(result);
});

router.post("/", async (req, res) => {
  const medic: Medic = {
    name: "Sergio",
    surname: "Iván",
    lastname: "Hidalgo",
    cmp: "12345",
    dni: "12345678",
    email: "sergiohidalgocaceres@gmail.com",
    photo: "sergio.jpg",
    isActive: true,
    locations: ["LIMA", "TRUJILLO"],
  };
  const result = await medicController.insert(medic);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const medic: Medic = {
    name: "Sergio",
    surname: "Iván",
    lastname: "Hidalgo",
    cmp: "12345",
    dni: "12345678",
    email: "sergiohidalgocaceres@gmail.com",
    photo: "sergio.jpg",
    isActive: true,
    locations: ["LIMA", "TRUJILLO"],
  };
  const result = await medicController.update(1, medic);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const result = await medicController.delete(1);
  res.json(result);
});*/

const basePath = '/medics';
export const medicRouter = baseRouter(basePath, medicController);
