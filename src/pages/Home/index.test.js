import { fireEvent, render, screen, within } from "@testing-library/react";
import { DataProvider, api } from "../../contexts/DataContext/index";
import Home from "./index";

const data = {
  events: [
    {
      id: 1,
      type: "conférence",
      date: "2022-04-29T20:28:45.744Z",
      title: "User&product MixUsers",
      cover: "/images/alexandre-pellaes-6vAjp0pscX0-unsplash.png",
      description: "Présentation des nouveaux usages UX.",
      nb_guesses: 900,
      periode: "14-15-16 Avril",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "1 espace de restaurations",
      ],
    },
    {
      id: 2,
      type: "expérience digitale",
      date: "2022-01-29T20:28:45.744Z",
      title: "#DigitonPARIS",
      cover: "/images/charlesdeluvio-wn7dOzUh3Rs-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "1 site web dédié",
      ],
    },
    {
      id: 3,
      type: "conférence",
      date: "2022-03-29T20:28:45.744Z",
      title: "Conférence &co-responsable",
      cover: "/images/chuttersnap-Q_KdjKxntH8-unsplash.png",
      description:
        "Débats et échanges autour des collaborations eco-responsable.",
      nb_guesses: 600,
      periode: "24-25-26 Février",
      prestations: [
        "1 scéne principale",
        "1 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 4,
      type: "conférence",
      date: "2022-08-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/headway-F2KRf_QfCqw-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 5,
      type: "expérience digitale",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/pablo-heimplatz-ZODcBkEohk8-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 6,
      type: "conférence",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/priscilla-du-preez-Q7wGvnbuwj0-unsplash1.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 7,
      type: "expérience digitale",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/product-school-dJICd7b_LlE-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 8,
      type: "conférence",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/product-school-nOvIa_x_tfo-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 9,
      type: "expérience digitale",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 10,
      type: "soirée entreprise",
      date: "2022-04-29T20:28:45.744Z",
      title: "User&product MixUsers",
      cover: "/images/alexandre-pellaes-6vAjp0pscX0-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 11,
      type: "conférence",
      date: "2022-01-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/charlesdeluvio-wn7dOzUh3Rs-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 12,
      type: "soirée entreprise",
      date: "2022-03-29T20:28:45.744Z",
      title: "Mega Event",
      cover: "/images/chuttersnap-Q_KdjKxntH8-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 13,
      type: "conférence",
      date: "2022-08-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/headway-F2KRf_QfCqw-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 14,
      type: "conférence",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/pablo-heimplatz-ZODcBkEohk8-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 15,
      type: "soirée entreprise",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/priscilla-du-preez-Q7wGvnbuwj0-unsplash1.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 16,
      type: "conférence",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/product-school-dJICd7b_LlE-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 17,
      type: "conférence",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/product-school-nOvIa_x_tfo-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 18,
      type: "soirée entreprise",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
  ],
  focus: [
    {
      title: "World economic forum",
      description:
        "Oeuvre à la coopération entre le secteur public et le privé.",
      date: "2022-01-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "Nordic design week",
      description: "Conférences sur le design de demain dans le digital",
      date: "2022-03-29T20:28:45.744Z",
      cover: "/images/teemu-paananen-bzdhc5b3Bxs-unsplash1.png",
    },
    {
      title: "Sneakercraze market",
      description: "Rencontres de spécialistes des Sneakers Européens.",
      date: "2022-05-29T20:28:45.744Z",
      cover: "/images/jakob-dalbjorn-cuKJre3nyYc-unsplash 1.png",
    },
  ],
};

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personnel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

// to implement

describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    api.loadData = jest.fn().mockReturnValue(data);
    render(
      <DataProvider>
        <Home />
      </DataProvider>
    );
    const listEvents = await screen.findAllByTestId("card-testid");
    // console.log(listEvents);
    expect(listEvents).not.toHaveLength(0);
  });
  it("a list a people is displayed", () => {
    render(<Home />);
    const listPeopleCard = screen.getAllByTestId("card-image-testid");
    expect(listPeopleCard).not.toHaveLength(0);
  });
  it("a footer is displayed", () => {
    render(<Home />);
    const result = screen.getByRole("contentinfo");
    expect(result).toBeInTheDocument();
  });
  it("an event card, with the last event, is displayed", async () => {
    api.loadData = jest.fn().mockReturnValue(data);
    render(
      <DataProvider>
        <Home />
      </DataProvider>
    );
    const footer = screen.getByRole("contentinfo");
    const isCardLastEvent = await within(footer).findByTestId(
      "card-image-testid"
    );
    expect(isCardLastEvent).toBeInTheDocument();
  });
});
