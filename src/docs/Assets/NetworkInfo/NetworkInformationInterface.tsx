import { SimpleEditor } from "../../lib/SimpleEditor";

export const NetworkInformationInterface = () => {
  const code = `export interface NetworkInformation {
    name: string;
    network_type: string;
    chain: Chain;
    chainspec: Chainspec;
    goals: string[];
    repository: string;
    validators: string[];
    release_cycle: string;
    specs: Specs;
    contacts: Contact[];
    faucet?: null | string;
    rpc_endpoints: RpcEndpoint[];
    api_endpoints: ApiEndpoint[];
    bootnodes: Bootnode[];
    documentation: string[];
    expectations: string[];
    features: string[];
    notes?: string[];
  }`;

  return <SimpleEditor code={code} standalone />;
};
