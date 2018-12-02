export class StylesheetManager {

    /**
     * Mount a stylesheet for a certain component in a <style></style> tag in the document head.
     *
     * @param compClassName      the class for which the stylesheet should be mounted
     * @param importedStylesheet the stylesheet to mount
     *
     * @returns boolean whether the stylesheet was mounted
     */
    public static mountStylesheetIfAbsent(compClassName: string, importedStylesheet: any): boolean {
        if (document.getElementById(compClassName) == null) {

            let stylesheet = document.createElement("style");

            stylesheet.className = "flow-component-class-stylesheet";
            stylesheet.id = compClassName;

            stylesheet.innerHTML = (importedStylesheet[0])[1]

            document.head.appendChild(stylesheet)

            return true;
        }
        return false;
    }

    /**
     * Mount a stylesheet in a <style></style> tag in the document head.
     *
     * @param id                 the id that the mounted stylesheet should have
     * @param importedStylesheet the stylesheet to mount
     *
     * @returns boolean whether the stylesheet was mounted
     */
    public static mountGlobalStylesheetIfAbsent(id: string, importedStylesheet: any): boolean {
        if (document.getElementById(id) == null) {

            let stylesheet = document.createElement("style");

            stylesheet.className = "flow-global-stylesheet";
            stylesheet.id = id;

            stylesheet.innerHTML = (importedStylesheet[0])[1]

            document.head.appendChild(stylesheet)

            return true;
        }
        return false;
    }

    /**
     * Update a stylesheet for a certain component in a <style></style> tag in the document head.
     *
     * @param compClassName      the class for which the stylesheet should be updated
     * @param importedStylesheet the stylesheet to update
     */
    public static updateStylesheet(compClassName: string, importedStylesheet: any) {
        let stylesheet = document.createElement("style");

        stylesheet.className = "flow-component-class-stylesheet";
        stylesheet.id = compClassName;

        stylesheet.innerHTML = (importedStylesheet[0])[1]

        document.head.appendChild(stylesheet)
    }

    /**
     * Remove a stylesheet for a certain component in a <style></style> tag in the document head.
     *
     * @param compClassName      the class for which the stylesheet should be removed
     *
     * @returns boolean whether the stylesheet was mounted
     */
    public static removeStylsheet(compClassName: string) {
        if (document.getElementById(compClassName) == null) {
            return false;
        } else {
            document.getElementById(compClassName).parentElement.removeChild(document.getElementById(compClassName))
        }
    }

}