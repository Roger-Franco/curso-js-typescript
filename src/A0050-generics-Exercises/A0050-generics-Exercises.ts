type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votatingOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotation(votationOption: VotationOption) {
    this._votatingOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votatingOptions[votationIndex]) return;
    this._votatingOptions[votationIndex].numberOfVotes++;
  }

  get votationOptions(): VotationOption[] {
    return this._votatingOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation) {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log('###');
      console.log('');
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');
votation1.addVotation({ numberOfVotes: 0, option: 'Python' });
votation1.addVotation({ numberOfVotes: 0, option: 'JavaScript' });
votation1.addVotation({ numberOfVotes: 0, option: 'TypeScript' });
votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);

const votation2 = new Votation('Qual sua cor preferida?');
votation2.addVotation({ numberOfVotes: 0, option: 'Vermelho' });
votation2.addVotation({ numberOfVotes: 0, option: 'Verde' });
votation2.addVotation({ numberOfVotes: 0, option: 'Azul' });
votation2.addVotation({ numberOfVotes: 0, option: 'Roxo' });
votation2.addVotation({ numberOfVotes: 0, option: 'Marrom' });
votation2.vote(1);
votation2.vote(1);
votation2.vote(0);
votation2.vote(0);
votation2.vote(0);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
