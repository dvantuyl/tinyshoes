export default Counter;
type Counter = SvelteComponent<Record<string, never>, {
    [evt: string]: CustomEvent<any>;
}, {}> & {
    $$bindings?: "" | undefined;
} & Record<string, any>;
declare const Counter: $$__sveltets_2_IsomorphicComponent<Record<string, never>, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import("svelte").ComponentConstructorOptions<Props>): SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings | undefined;
    } & Exports;
    (internal: unknown, props: {
        $$events?: Events | undefined;
        $$slots?: Slots | undefined;
    }): Exports;
    z_$$bindings?: Bindings | undefined;
}
import { SvelteComponent } from "svelte";
